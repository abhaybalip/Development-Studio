import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sqflite/sqflite.dart';

void main() async {
  runApp(MaterialApp(
    title: 'MyApp',
  ));
  final databaseHelper = await DatabaseHelper.instance;

  // Insert a new task
  await databaseHelper.insertTask(Task(id: 0, title: 'Buy groceries'));

  // Get all tasks
  final tasks = await databaseHelper.getTasks();
  for (var task in tasks) {
    print(task.title);
  }

  // Update a task
  final taskToUpdate = tasks.first;
  taskToUpdate.title = 'Updated title';
  await databaseHelper.updateTask(taskToUpdate);

  // Delete a task
  await databaseHelper.deleteTask(tasks.first.id);
}

const String tableName = 'tasks';

class Task {
  int id;
  String title;

  Task({required this.id, required this.title});

  Map<String, dynamic> toMap() {
    return {'id': id, 'title': title};
  }
}

class DatabaseHelper {
  DatabaseHelper._privateConstructor();

  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();

  static Database? _database;

  Future<Database> get database async {
    if (_database == null) {
      _database = await _initDatabase();
    }
    return _database!;
  }

  Future<Database> _initDatabase() async {
    final databasePath = await getDatabasesPath();
    final path = databasePath + 'tasks.db';

    // Open the database and create the table if it doesn't exist
    return await openDatabase(
      path,
      version: 1,
      onCreate: (db, version) {
        db.execute('''
          CREATE TABLE $tableName (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL
          )
        ''');
      },
    );
  }

  // CRUD functions

  Future<void> insertTask(Task task) async {
    final db = await database;
    await db.insert(tableName, task.toMap());
  }

  Future<List> getTasks() async {
    final db = await database;
    final maps = await db.query(tableName);
    return maps.toList();
  }

  Future<void> updateTask(Task task) async {
    final db = await database;
    await db.update(
      tableName,
      task.toMap(),
      where: 'id = ?',
      whereArgs: [task.id],
    );
  }

  Future<void> deleteTask(int id) async {
    final db = await database;
    await db.delete(
      tableName,
      where: 'id = ?',
      whereArgs: [id],
    );
  }
}
