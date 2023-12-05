// Flutter - Button

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter app',

      home: Scaffold(
        appBar: null,

        body: Container(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  FloatingActionButton(
                    mouseCursor: MouseCursor.uncontrolled,
                    splashColor: Colors.blue,
                    backgroundColor: Colors.grey,
                    hoverColor: Colors.lightBlue,
                    child: Text('Flat Button'),
                    onPressed: (){
                      print('flat action button pressed !');
                    }
                  ),

                  IconButton(
                    onPressed: (){
                      print('icon button pressed !');
                    },
                    icon: Text('Icon'),
                    tooltip: 'tool-tip',
                  ),

                  ElevatedButton(
                    statesController: MaterialStatesController(
                    ),
                    onPressed: (){
                      print('elevated button pressed !');
                    },
                    onLongPress: (){
                      print('elevated button long pressed !');
                    },
                    onHover: (value){
                      print('elevated button hovered \n value = $value');
                    },
                    child: const Text('elevated button')
                  ),
                ]
              ),

              Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  InkWell(
                    radius: 20,
                    borderRadius: BorderRadius.circular(5),
                    focusColor: Colors.blue,
                    highlightColor: Colors.red,
                    hoverColor: Colors.amber,
                    child: const Text('inkwell-button'),

                    onTap: () => {
                      print('inkwell button clicked !')
                    },
                  ),

                  PopupMenuButton(
                    itemBuilder: (context) => [
                      PopupMenuItem(
                        child: Text('Item 1'),
                        textStyle: null,
                        onTap: (){
                          print('PopUp menu item 1 clicked !');
                        },
                      ),
                      PopupMenuItem(
                        child: Text('Item 2'),
                        textStyle: null,
                        onTap: (){
                          print('PopUp menu item 2 clicked !');
                        },
                      )
                    ],

                    tooltip: 'tooltip-popup',
                    child: const Text('PopUp-Button'),
                  ),

                  OutlinedButton(
                    child: Text('Outline-Button'),
                    onPressed: (){
                      print('Outline-Button tapped !');
                    },
                    onHover: (b){
                      print('hovered outline-button !');
                    }
                  )
                ],
              )
            ]
          )
        ),
      ),
    );
  }
}