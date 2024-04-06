import datetime
file = open(r'.\task.txt', 'a')
file.write(f'{datetime.datetime.now()} - the script ran\n')