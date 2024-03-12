def substring(string):
    substr = set(string)
    return len(substr)


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


string = "serdevemuitolegalmasehprecisoestudarbastante"
print(substring(string))
print(longer_no_repeating_substring_len(string))
