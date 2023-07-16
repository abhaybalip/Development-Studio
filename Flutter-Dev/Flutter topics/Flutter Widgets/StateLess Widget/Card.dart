// Flutter - Cards

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

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
                  Card(
                    child: Text('Card 1'),
                    color: Colors.red,
                    elevation: 20,
                  ),
                  Card(
                    child: Text('Card 2'),
                    elevation: 50,
                  )
                ],
              ),
            ],
          )
        ),
      ),
    );
  }
}