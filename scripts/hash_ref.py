import hashlib
import sys

def md5_first_six(input_string):
    # Calculate MD5 hash
    md5_hash = hashlib.md5(input_string.encode()).hexdigest()
    
    # Return the first 6 characters
    return md5_hash[:6]

# Example usage:
if len(sys.argv) > 1:
    input_str = sys.argv[1]
    result = md5_first_six(input_str)
    print(result)
else:
    print("Please provide an input string as a command-line argument.")