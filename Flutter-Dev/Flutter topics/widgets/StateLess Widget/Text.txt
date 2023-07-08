// Flutter - Text Widget

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
              Text('text box 1',
              textAlign: TextAlign.center,
              textDirection: TextDirection.ltr,
              overflow: TextOverflow.fade,
              ),
              Text('text box 2',
              maxLines: 2,
              softWrap: false,
              semanticsLabel: 'Text Box',
              ),
              Text('text box 3',
              style: TextStyle(
                color: Colors.amber,
                height: 5,
                fontFamilyFallback: null,
                shadows: [
                Shadow(color: Colors.blueAccent, offset: Offset(2,1), blurRadius:10)
              ]
              ),
              )
            ],
          ),
        ),
      ),
    );
  }
}