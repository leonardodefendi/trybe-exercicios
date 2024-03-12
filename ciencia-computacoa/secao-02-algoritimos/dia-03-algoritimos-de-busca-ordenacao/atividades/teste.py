def merge_sorted(word, start=0, end=None):
    if end is None:
        end = len(word)
    if end - start > 1:
        mid = (start + end) // 2
        merge_sorted(word, start, mid)
        merge_sorted(word, mid, end)
        merge(word, start, mid, end)
    return word


def merge(word, start, mid, end):
    left = word[start:mid]
    right = word[mid:end]
    left_index, right_index = 0, 0
    index_geral = start

    while left_index < len(left) or right_index < len(right):
        if right_index == len(right) or (
            left_index < len(left) and left[left_index] <= right[right_index]
        ):
            word[index_geral] = left[left_index]
            left_index += 1
        else:
            word[index_geral] = right[right_index]
            right_index += 1
        index_geral += 1


def is_anagram(first_string, second_string):
    first_string_orded = "".join(merge_sorted(list(first_string.lower())))
    second_string_orded = "".join(merge_sorted(list(second_string.lower())))
    if first_string == "" or second_string == "":
        return (first_string_orded, second_string_orded, False)
    elif second_string == first_string:
        return (first_string_orded, second_string_orded, True)
    else:
        return (first_string_orded, second_string_orded, True)


print(is_anagram("pedraa", "pedra"))
