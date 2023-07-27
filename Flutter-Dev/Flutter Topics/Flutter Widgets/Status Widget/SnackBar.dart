// Flutter - Snack Bar
import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final snackbar = SnackBar(
    content: Text('snack-bar content'),
    backgroundColor: Colors.grey,
    duration: Duration(seconds: 5),
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: null,
        body: Builder(
          builder: (context) => Container(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                ElevatedButton(
                  child: const Text('snack-bar'),
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(snackbar);
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}