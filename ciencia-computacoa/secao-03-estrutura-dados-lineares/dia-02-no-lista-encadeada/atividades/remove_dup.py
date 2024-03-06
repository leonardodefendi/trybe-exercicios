from linked_list_content import LinkedList


def removed_dup(linked_list: LinkedList):
    index = 0
    dups = [linked_list.head_value.value]
    new_list = LinkedList()
    while index < len(linked_list):
        element = linked_list.head_value.next
        print("Elemento", element.next)
        if element not in dups:
            new_list.insert_first(element)
        dups.append(element)
        index += 1
    print(new_list)


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


new_list = LinkedList()
new_list.insert_first(3)
new_list.insert_first(3)
new_list.insert_first(4)


print(removed_dup(new_list))
