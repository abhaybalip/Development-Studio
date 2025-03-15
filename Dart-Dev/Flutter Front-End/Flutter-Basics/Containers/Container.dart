// Flutter - container

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my-flutter-app',

      home: Scaffold(
        appBar: AppBar(
          title: const Text('App - Bar',
          style: TextStyle(
            color: Colors.red,
            fontSize: 30
          )),
        ),

        body: Container(
          child: Column(
            children: [
              Container(
                child: Text('container 1',
                style: TextStyle(
                  color: Colors.red,
                  fontWeight: FontWeight.bold
                ))
              ),
              Container(
                child: Row(
                  children: [
                    Text('container 2 text 1'),
                    Text('container 2 text 2')
                  ],
                ),
                height: 70,
                width: 70,
                color: Colors.yellow,
              ),
              Container(
                child: Text('container 3'),
                height: 70,
                width: 70,
                decoration: BoxDecoration(
                  color: Colors.blueGrey,
                  border: Border.all(
                    width: 5,
                    color: Colors.black
                  )
                ),
              ),
              Container(
                child: Text('container 4'),
                height: 70,
                width: 70,
                margin: EdgeInsets.all(20),
                padding: EdgeInsets.all(5),
                alignment: Alignment.center,
              ),

              Container(
                child: Text('constiner 5'),
                constraints: BoxConstraints(
                  minHeight: 5,
                  minWidth: 5,
                  maxHeight: 80,
                  maxWidth: 80
                ),
              )
            ],
          ),
        )
      ),
    );
  }
}