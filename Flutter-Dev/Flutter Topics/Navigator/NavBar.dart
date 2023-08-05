// Flutter - Botton Nav Bar
import 'package:flutter/material.dart';

void main(List<String> args) => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<Widget> _widgetOptions = <Widget>[
    Text('Home Page', style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold)),
    Text('Search Page', style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold)),
    Text('Profile Page', style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold)),
  ];

  int cur_index = 0;

  void _tapped(int value) {
    setState(() {
      cur_index = value;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter_app',
      home: Scaffold(
        appBar: AppBar(
          title: Text('My App'),
        ),
        body: Center(
          child: _widgetOptions[cur_index],
        ),


        bottomNavigationBar: BottomNavigationBar(
          items: [
            const BottomNavigationBarItem(
              icon: Icon(Icons.home_outlined),
              label: 'Home',
              tooltip: 'Tool-Tip',
            ),
            const BottomNavigationBarItem(
              icon: Icon(Icons.cancel),
              label: 'Cancel',
              tooltip: 'Tool-Tip',
            ),
            const BottomNavigationBarItem(
              icon: Icon(Icons.circle),
              label: 'Ok',
              tooltip: 'Tool-Tip',
            )
          ],
          currentIndex: cur_index,
          backgroundColor: Colors.grey,
          // selectedItemColor: Colors.black,
          elevation: 5,
          onTap: (value) => _tapped(value),
        ),
      ),
    );
  }
}