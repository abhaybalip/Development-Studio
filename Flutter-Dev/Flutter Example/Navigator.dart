// Flutter -  Material Navigator

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter-app',
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: Container(
        padding: EdgeInsets.all(100),
        child: InkWell(
          child: Text('New Page'),
          onTap: () {
            print('New Page Opened');
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => const New_Page(),
              ),
            );
          },
        ),
      ),
    );
  }
}

class New_Page extends StatelessWidget {
  const New_Page({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: null,
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('New Page Opened'),
            InkWell(
              child: Text('close'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}