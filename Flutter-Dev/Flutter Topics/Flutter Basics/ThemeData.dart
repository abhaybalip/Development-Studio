import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',

      theme: ThemeData(
        colorScheme: ColorScheme(
          brightness: Brightness.dark,
          primary: Colors.grey,
          onPrimary: Colors.blueGrey,
          secondary: Colors.grey,
          onSecondary: Colors.grey,
          error: Colors.grey,
          onError: Colors.grey,
          background: Colors.grey,
          onBackground: Colors.grey,
          surface: Colors.grey,
          onSurface: Colors.grey,
        ),
        inputDecorationTheme: InputDecorationTheme(

        )
      ),

      home: Scaffold(
        appBar: null,
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
}