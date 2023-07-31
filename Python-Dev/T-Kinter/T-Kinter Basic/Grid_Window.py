# T-Kinter - Grid place
from tkinter import *;

window = Tk()

# Define Widgets
l = Label(window,text='label1')
l1 = Label(window,text='label2')
l2 = Label(window,text='label3')
l3 = Label(window,text='label4')

# Place widgets by grid position
l.grid(row=1,column=1)
l1.grid(row=1,column=2)
l2.grid(row=2,column=1)
l3.grid(row=2,column=2)

window.mainloop()