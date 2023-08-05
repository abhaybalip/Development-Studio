// Flutter - Navigation : Routes

import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'my_flutter_app',
      initialRoute: '/',
      routes: {
        '/': (context) => MyHomePage(),
        '/new_page': (context) => NewPage(),
        '/new_page1': (context) => NewPage1(),
      },
    );
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/new_page');
              },
              child: const Text('New Page'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/new_page1');
              },
              child: const Text('New Page 1'),
            )
          ],
        ),
      ),
    );
  }
}

class NewPage extends StatelessWidget {
  const NewPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('New Page'),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Back'),
            )
          ],
        ),
      ),
    );
  }
}

class NewPage1 extends StatelessWidget {
  const NewPage1({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text('New Page 1'),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Back'),
            )
          ],
        ),
      ),
    );
  }
}