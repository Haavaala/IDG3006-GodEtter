# GodEtter (hardware / pi)
*This README is unfinished and is missing information*

Here lays the hardware condfiguration and Python scripts for the GodEtter project. This guide will allow you to set up the scripts locally.
Important: This was originally written for the Raspberry Pi 4, and the guide will be based on this. A physical barcode scanner was also used, but it is not needed. You can simply input the codes by using a keyboard.

## Getting Started

The python script requires an .env file to run in the same directory as the script with these values:
SITE_URL = "" (back-end site url without slash at the end)
SITE_KEY = "" (site connection key)

### Run 
if start script on startup for py:
    it is running once the py has power (needs to be fixed now)

else: change directory to /Dokumenter
then run the command "Sudo python3 godEtter.py" 

Press X for scanning in items - can press X before scanning in all the items after each other or
scan all the items and then press X for adding them all to the fridge,
The same goes with scanning out items, the user can press the triangle button once for the action, it can be in whatever order.

when an item is successfully scanned into the fridge, a success type sound will be played, if an error occurs there will be an error sound
for scanning out successfully a sound of a trash can will be played to indicate that

when an item is successfully scanned by the user the python script is adding the item to the database by its barcode with a post request. 

to exit the script: press circle 


#### Dependencies
...

## Built with
* [Python](https://www.python.org/)
* ...

## Authors
See the main [README.md](../README.md) file for authors.
