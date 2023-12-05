// Flutter - Icons


import 'package:flutter/material.dart';

void main(List<String> args) => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter-app',

      home: Scaffold(
        appBar: null,

        body: Container(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
              Icon(
                Icons.close,
                size: 50,
                color: Colors.red,
              ),

              Icon(Icons.cancel),

              Icon(
                Icons.camera,
                size: 50,
                color: Colors.green,
              ),
                ]
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [],
              )
            ],
          ),
        ),
      ),
    );
  }
}