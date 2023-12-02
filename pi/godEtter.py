import re
import requests
import threading
from pyPS4Controller.controller import Controller
import os
import pygame
from pygame import mixer

script_running = False
stop_thread = False
current_function = None
scan = True
scanning_in_progress = False  

pygame.init()
mixer.init()

#class for the ps4 controller
class MyController(Controller):
    def __init__(self, **kwargs):
        Controller.__init__(self, **kwargs)

    #sets the variables
    def run_my_script(self):
        global scan, scanning_in_progress
        success_sound = mixer.Sound('./sounds/victory.wav')
        error_sound = mixer.Sound('./sounds/error.wav')
        # scanOut_sound = mixer.Sound('./sounds/scanOut.wav')
        userInput_sound = mixer.Sound('./sounds/userInput.wav')

        #check if the user has pressed triangle or X and provides prints based on choice
        while scanning_in_progress:
            if scan:
                print("Scan your item")
            else:
                print("Scan out your item")
            #opens the input field
            barcode = input()
            barcode = re.sub(r'[^0-9]', '', barcode)
            #scan = true is for scanning in and else is for scanning out
            if scan:
                #sends the scanned barcode to the database
                print('You scanned an item with the barcode: ' + barcode)
                url = "https://refu.re/fridge/add_item.php?barcode=" + barcode
                data = {'key': '3gYSbkFlH9ZmuhbYiPaVIgfm39U7fbIQ', 'device_id': 1001}
                try:
                    x = requests.post(url, data=data)
                    if x.status_code == 200 or x.status_code == 201:
                        #if success, give message and sound, else: give message and sound for fail
                        print('You successfully added item to your fridge')
                        success_sound.play()  # Play a success sound
                    elif x.status_code == 300:
                        print('Added unknown item, needs user input')
                        userInput_sound.play() # Play a "requires user input sound"
                    else:
                        print('Error adding item to your fridge:', x.status_code)
                        error_sound.play()  # Play an error sound
                #give error for connection issues 
                except requests.exceptions.RequestException as e:
                    print('Connection Error:', e)
                    error_sound.play()
            #scan out and sends the information needed to the backend
            # else:
            #     print('You scanned out an item with the barcode: ' + barcode)
            #     url = "https://refu.re/fridge/scan_out.php?barcode=" + barcode
            #     data = {'key': '3gYSbkFlH9ZmuhbYiPaVIgfm39U7fbIQ', 'device_id': 1001}
            #     try:
            #         x = requests.post(url, data=data)
            #         if x.status_code == 200 or x.status_code == 201:
            #             print('You successfully scanned out an item!')
            #             scanOut_sound.play()  # Play a success sound
            #         else:
            #             print('Error:', x.status_code)
            #             error_sound.play()  # Play an error sound
            #     except requests.exceptions.RequestException as e:
            #         print('Connection Error:', e)
            #         error_sound.play()

        scanning_in_progress = False  # Reset the flag when scanning is done

    #runs the instance of functionality when pressing X
    def on_x_press(self):
        global scan, script_running, scanning_in_progress
        scan = True
        script_running = True
        scanning_in_progress = True
        threading.Thread(target=self.run_my_script).start()

    #runs the instance of functionality when pressing triangle
    # def on_triangle_press(self):
    #     global scan, script_running, scanning_in_progress
    #     scan = False
    #     script_running = True
    #     scanning_in_progress = True
    #     threading.Thread(target=self.run_my_script).start()

    #exits the script
    def on_circle_press(self):
        os._exit(0)

controller = MyController(interface="/dev/input/js0", connecting_using_ds4drv=False)
controller.listen(timeout=60)
