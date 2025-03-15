// FLutter - Image

import 'package:flutter/material.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  final String src = 'data:image/png;base64,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';
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my-flutter-app',

      home: Scaffold(
        appBar: AppBar(
          title: Text('App - Bar'),
        ),

        body: Container(
          child: Column(
            children: [
              Text('Images : '),
              Image.network(src,
              scale: 1.5,
              repeat: ImageRepeat.noRepeat,
              ),
              Image.network(src,
              height: 50,
              width: 50,
              color: Colors.black.withOpacity(0),
              ),
              Image.network(src,
              semanticLabel: 'dart image',
              )
            ],
          ),
        ),
      ),
    );
  }
}