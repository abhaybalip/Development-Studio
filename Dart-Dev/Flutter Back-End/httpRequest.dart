// Flutter - BackEnd

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

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
      title: 'test_app',
      home: homePage(),
    );
  }
}

Scaffold homePage(){
  return Scaffold(
    appBar: AppBar(
      title: const Text('Fetch Data'),
    ),
    body: const Center(
      child: ElevatedButton(onPressed: fetch, child: Text('')),
    ),
  );
}

Future<void> fetch() async{
  final url = Uri.parse('https://reqres.in/api/users/2');
  final res = await http.get(url);
  final data = jsonDecode(res.body);

  print('Response Header : ${res.headers} \nResponse Body : ${data}');
}