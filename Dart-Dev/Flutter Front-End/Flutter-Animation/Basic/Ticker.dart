// Flutter - Animation - Ticker

import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(home: SimpleTickerManagement()));
}

class SimpleTickerManagement extends StatefulWidget {
  const SimpleTickerManagement({super.key});

  @override
  State<SimpleTickerManagement> createState() => _SimpleTickerManagementState();
}

class _SimpleTickerManagementState extends State<SimpleTickerManagement>
    with SingleTickerProviderStateMixin {
  late Ticker _ticker;
  int _counter = 0;
  bool _isTicking = false;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((Duration elapsed) {
      if (mounted) { // Essential: Check if widget is mounted
        setState(() {
          _counter++;
        });
      }
    });
  }

  @override
  void dispose() {
    _ticker.dispose(); // Important: Dispose of the ticker
    super.dispose();
  }

  void _toggleTicker() {
    setState(() {
      _isTicking = !_isTicking;
      if (_isTicking) {
        if (!_ticker.isTicking) { // Check if already ticking
          _ticker.start();
        }
      } else {
        _ticker.stop();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Simple Ticker Management')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Counter: $_counter', style: const TextStyle(fontSize: 24)),
            ElevatedButton(
              onPressed: _toggleTicker,
              child: Text(_isTicking ? 'Stop Ticker' : 'Start Ticker'),
            ),
          ],
        ),
      ),
    );
  }
}
