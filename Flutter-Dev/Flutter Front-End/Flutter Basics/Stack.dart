// FLutter - Stack

import 'package:flutter/material.dart';

void main(List<String> args)=> runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter-app',

      home: Scaffold(
        appBar: null,

        body: Container(
          child: Stack(
            children: <Widget>[
              Container(
                color: Colors.red,
              ),
              Container(
                color: Colors.green,
                height: 500,
              ),
              Container(
                color: Colors.blue,
                height: 100,
              )
            ],
          ),
        ),
      ),
    );
  }
}