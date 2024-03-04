import json
import csv

with open("exercicio3.json", "r") as file:
    data = json.load(file)


def count_categories(books):
    categories = dict()
    for book in books:
        for category in book["categories"]:
            if category not in categories:
                categories[category] = 1
            else:
                categories[category] += 1
    return categories


def count_all_categories(categories):
    return len(categories)


def calculate_percentage(categories):
    total_categories = count_all_categories(categories)
    percentages = {}
    for category, quantity in categories.items():
        percentages[category] = quantity / total_categories
    return percentages


with open("percentagens_books.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)

    all_percentages = calculate_percentage(count_categories(data))

    headers = ["categoria", "porcentagem"]
    writer.writerow(headers)

    for category, percen in all_percentages.items():
        row = [category, percen]
        writer.writerow(row)

print(count_categories(data))
