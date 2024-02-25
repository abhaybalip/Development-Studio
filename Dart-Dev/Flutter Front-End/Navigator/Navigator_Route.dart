// Navigation - Routes

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: HomePage(),
      routes: {
        '\\':(context) => const HomePage(),
        '\\SecondPage':(context) => const SecondPage(),
      },
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home Page'),),
      body: Center(
        child: InkWell(
          child: Text('SecondPage'),
          onTap: ()=>{
            Navigator.pushNamed(context, '\\SecondPage')
          },
        ),
      ),
    );
  }
}

class SecondPage extends StatefulWidget {
  const SecondPage({super.key});

  @override
  State<SecondPage> createState() => _SecondPageState();
}

class _SecondPageState extends State<SecondPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Second Page'),),
      body: Center(
        child: InkWell(
          child: Text('Back'),
          onTap: ()=>{
            Navigator.pop(context)
          },
        ),
      ),
    );
  }
}