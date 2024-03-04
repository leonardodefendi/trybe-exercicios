from exercicio4 import fizz_buzz


def test_fizz_buzz_should_return_list_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_return_fizz_correctly():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_fizz_buzz_return_buzz_correctly():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_return_fizz_buzz_correctly():
    assert fizz_buzz(15)[-1] == "FizzBuzz"
