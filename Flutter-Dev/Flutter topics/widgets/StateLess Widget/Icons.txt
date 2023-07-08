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
          title: Text('App - Bar'),
        ),

        body: Container(
          child: const Column(
            children: [
              Text('Flutter Default Icons : '),
              Icon(
              Icons.camera,
              size: 50,
              color: Colors.black,
              ),
              Icon(Icons.mic,
              size: 50,
              color: Colors.amber,
              ),
              Icon(Icons.star,
              size: 50,
              color: Colors.green,
              )
            ],
          )
        ),
      ),
    );
  }
}