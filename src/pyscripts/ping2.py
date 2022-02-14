import os
import json
from time import sleep
from datetime import datetime as dt


ip = input("~IP addr: ")

if ip == "102": ip = "172.30.112.102"
if ip == "103": ip = "172.30.112.103"
if ip == "104": ip = "172.30.112.104"
if ip == "105": ip = "172.30.112.105"

file = input("~Filename to write to: ")
f = open(file)
data = json.load(f)


while True:
    sleep(1)
    # 172.30.112.102
    response = os.popen(f"ping {ip} -n 1").read().split("\n")[2]
    time = 0
    if 'timed out' in response:
        time = 0
    elif 'time=' in response:
        time = int(response.split('time=')[1].split('ms')[0])
    print(time)
    data.append({"y": time, "time": dt.now().strftime("%I:%M:%S %p, %m/%d/%Y")})
    with open(f'{file}', "w") as datafile:
        json.dump(data, datafile)