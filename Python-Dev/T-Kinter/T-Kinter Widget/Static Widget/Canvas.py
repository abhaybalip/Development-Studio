# T-Kinter - Button
from tkinter import *;

window = Tk()

c = Canvas(window,height=500,width=500, background='red').pack()

c1 = Canvas(window,height=150,width=150,background='pink',highlightbackground='blue',).pack()

canvas = Canvas(window, width=200, height=200)
canvas.pack()
arc = canvas.create_arc(10, 10, 190, 190, start=0, extent=180, style="arc")

window.mainloop()