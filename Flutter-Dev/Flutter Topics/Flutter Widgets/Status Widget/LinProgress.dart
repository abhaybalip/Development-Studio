// Flutter - Linear Progress Bar

import 'dart:async';
import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  var value = 0.0;
  void increment(){
    Timer.periodic(Duration(seconds: 1),(timer) {
      this.setState(() {
      this.value += 0.1;
    });
    });
  }
  void restart(){
    this.setState(() {
      this.value = 0.0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: null,
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              ElevatedButton(
                child: Text('Inc'),
                onPressed: ()=> increment()
              ),

              ElevatedButton(
                child: Text('Restart'),
                onPressed: ()=> restart(),
              ),

              LinearProgressIndicator(
                value: this.value,
                color: Colors.red,
              )
            ],
          ),
        ),
      ),
    );
  }
}