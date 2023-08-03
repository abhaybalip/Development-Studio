# T-Kinter - Menu
from tkinter import *;

window = Tk()
window.geometry('500x500')

menu = Menu(window,background='grey')
menu.add_command(label='Option 1',command= lambda : print('clicked option 1'))
menu.add_command(label='Option 2',command= lambda : print('clicked option 2'))
menu.add_command(label='Option 3',command= lambda : print('clicked option 3'))

window.config(menu=menu)

window.mainloop()