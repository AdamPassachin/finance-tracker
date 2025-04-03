import clientPromise from '../../../utils/mongo';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("Test"); // Using your Test database

    // Fetch all documents from your collection
    const collection = db.collection("people"); // Replace with your actual collection name
    const data = await collection.find({"name": "adam"}).toArray();

    // Return the response
    return NextResponse.json({ 
      success: true, 
      message: "Successfully connected to MongoDB Test database!",
      data: data,
      count: data.length
    });

  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to connect to MongoDB",
      error: error.message 
    }, { status: 500 });
  }
} 