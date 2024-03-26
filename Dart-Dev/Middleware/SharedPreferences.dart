// 
// Shared Preference - store data before or after app closure

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main(List<String> args) {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'db-app',
      home: homePage(),
    );
  }
}

Future<SharedPreferences> getPrefs() async {
  return await SharedPreferences.getInstance();
}

Future<void> saveData(String key, String value) async {
  final prefs = await getPrefs();
  prefs.setString(key, value);
}

Future<String> readData(String key) async {
  final prefs = await getPrefs();
  var str = prefs.getString(key);
  return str ?? '';
}

Future<void> removeData(String key) async {
  final prefs = await getPrefs();
  prefs.remove(key);
}

Widget homePage() {
  //
  TextEditingController keycontroller = TextEditingController(),
      valuecontroller = TextEditingController();

  submit() async {
    print('clicked submit');
    await saveData(keycontroller.text, valuecontroller.text);
    print('data stored');
    print(await readData(keycontroller.text));
  }

  return Scaffold(
    appBar: AppBar(
      title: const Text('Shared Preference Example '),
    ),
    body: Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        Container(
          child: TextField(
            controller: keycontroller,
            decoration: InputDecoration(labelText: 'Enter Key'),
          ),
          width: 250,
        ),
        Container(
          child: TextField(
            controller: valuecontroller,
            decoration: InputDecoration(labelText: 'Enter Value'),
          ),
          width: 250,
        ),
        ElevatedButton(
          onPressed: submit,
          child: Text('Press It'),
        ),
      ],
    )),
  );
}
