# T-Kinter - Place Geomatry
from tkinter import *;

window = Tk()

# Expansion
label = Label(window,text='text-label')
label.pack(expand=True,)

# Position relative to parent widget
label1 = Label(window,text='text-label')
label1.pack(side=RIGHT)

# axis filling
label2 = Label(window,text='text-label')
label2.pack(fill=Y)

window.mainloop()