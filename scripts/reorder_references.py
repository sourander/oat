import re
import sys
import os

from pathlib import Path
from dataclasses import dataclass


@dataclass
class Reference:
    name: str
    full_text: str
    first_appearance: int | None = None



def find_reference_index(lines: list[str]) -> int:
    """
    Finds the index of the last line that matches the pattern for the reference list.

    Args:
        lines (list[str]): The lines of text to search through.

    Returns:
        int: The index of the last line that matches the pattern, or None if no match is found.
    """
    index = None
    for i, line in enumerate(lines):
        if re.match(r"^#+\s*Lähdeluettelo", line):
            index = i
    return index


def extract_references(reference_lines: list[str]) -> list[Reference]:
    """
    Extracts references from the given list of reference lines. The references should follow
    Markdown Footnote syntax. For example: '[^abc123]: This is a reference.'

    Args:
        reference_lines (list[str]): The lines containing references.

    Returns:
        list[str]: The extracted references.
    """
    references: list[Reference] = []

    # Skip empties
    reference_lines = [line for line in reference_lines if line]

    for line in reference_lines:
        #  Regex Pattern Explanation:
        #    - ^ asserts the start of the line.
        #    - \[\^ matches the literal characters '[^'.
        #    - (\w+) captures one or more word characters as a group.
        #    - \] matches the literal character ']'.
        #    - : matches the literal character ':'.
        match = re.match(r"^\[\^(\w+)\]:", line)
        if match:
            name = match.group(1)
            ref = Reference(name=name, full_text=line)
            references.append(ref)
        else:
            print(f"[Warning] Line '{line}' does not match the reference pattern.")
    return references

def extract_body_references(body_text: list[str]) -> set[str]:
    references = set()
    pattern = r'\[\^(\w+)\]'

    for line in body_text:
        matches = re.findall(pattern, line)
        references.update(matches)

    return references

def check_references_exist(references: list[str], body_text: list[str]):
    for reference in references:
        r = f"[^{reference}]"

        if not any(reference in line for line in body_text):
            print(f"Warning: Reference '{reference}' not found in the body text.")


def reorder_references(body_text: list[str], references: list[Reference]):
    body_bulk = "".join(body_text)
    seen_references: list[Reference] = []

    for reference in references:
        r = f"[^{reference.name}]"
        index = body_bulk.find(r)
        if index == -1:
            print(f"[Warning] Reference '{reference.name}' not found in the body text.")
        else:
            seen_references.append(
                Reference(
                    name=reference.name,
                    first_appearance=index,
                    full_text=reference.full_text,
                )
            )

    ordered_references = sorted(seen_references, key=lambda x: x.first_appearance)

    return ordered_references


def write_file(file_path:Path, body_text:list[str], orig_ref:str, new_reference_lines:list[Reference]):

    ref_line = [orig_ref + os.linesep]

    new_content = (os.linesep).join(body_text + ref_line + [x.full_text for x in new_reference_lines])

    print("[INFO] Overwriting file:", file_path)
    file_path.write_text(new_content, encoding="utf-8")


def warn_of_extra_body_refs(body_references: set[str], references: list[Reference]):
    A = body_references
    B = {r.name for r in references}
    
    # Find those that exist in-body but not in the reference list
    diff = A - B

    for ref in diff:
        print(f"[Warning] Reference '{ref}' found in the body text but not in the reference list.")

def main():
    if len(sys.argv) > 1:
        file_path = Path(sys.argv[1])
        print("[INFO] Reading file:", file_path)
        lines = file_path.read_text(encoding="utf-8").splitlines()
    else:
        print("Please provide a path to input file as a command-line argument.")
        return

    # Find the index of "[#]* Lähdeluettelo"
    index = find_reference_index(lines)
    assert index, "Error: Heading such as '## Lähdeluettelo' not found in the file."

    # Split to body text and reference lines
    body_text, orig_ref, reference_lines = lines[:index], lines[index], lines[index + 1 :]

    # Test the regex extraction for safety.
    test_data = ["[^kissa]: Lorem ipsum", "[^koira]: Lorem ipsum"]
    assert extract_references(test_data) == [
        Reference(name="kissa", full_text="[^kissa]: Lorem ipsum"),
        Reference(name="koira", full_text="[^koira]: Lorem ipsum"),
    ], "[ERROR] Check the regex pattern for extracting references."

    # Extract references and check that they exist in the body text
    references = extract_references(reference_lines)
    body_references = extract_body_references(body_text)
    warn_of_extra_body_refs(body_references, references)

    # Reorder refererences
    # Those that are not found in the body text are not included in the output.
    ordered_references = reorder_references(body_text, references)

    write_file(file_path, body_text, orig_ref, ordered_references)

if __name__ == "__main__":
    main()
