valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]


def time_without_instability(values_array):
    max_time_on = 0
    times = 0
    for time in values_array:
        if time == 1:
            times += 1
        else:
            times = 0
        if times > max_time_on:
            max_time_on = times
    return max_time_on


print(time_without_instability(valores_coletados))
