// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ztxzipatdcssuqhtzgkx.supabase.co"; // Add your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0eHppcGF0ZGNzc3VxaHR6Z2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzYxMDIsImV4cCI6MjA1MDAxMjEwMn0.7VGmxGK5-Qk4Ng8Xn1shGH1eZXtBNIU-p-o40fwiaZI"; // Add your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



/**
 * Hent alle produkter fra Supabase
 */
export async function getAllProducts() {
  const { data, error } = await supabase.from('products').select('*');
  
  if (error) {
    console.error('Fejl ved hentning af produkter:', error);
    return [];
  }

  return data;
}

/**
 * Hent et specifikt produkt ved hjælp af ID
 */
export async function getProductById(id) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Fejl ved hentning af produkt:', error);
    return null;
  }

  return data;
}

/**
 * Hent produktbilleder fra Supabase Storage (hvis de er lagret der)
 */
export async function getProductImage(imagePath) {
  const { data, error } = await supabase.storage
    .from('product-images')  // Skift 'product-images' til din Storage-bucket
    .download(imagePath);

  return URL.createObjectURL(data);
}


import { supabase } from './supabaseClient';  // Sørg for at have Supabase korrekt sat op


import { supabase } from './supabaseClient';  // Sørg for at importere din supabaseClient korrekt

export async function getProductsByIds() {
  const { data, error } = await supabase
    .from('products')  // Tabelnavnet i din Supabase-database
    .select('id, name, image_path')  // De kolonner, du ønsker at hente
    .in('id', [10, 11, 12, 13]);  // Filtrering af produkter med disse ID'er

  if (error) {
    console.error('Fejl ved hentning af produkter:', error);
    return [];  // Returner en tom array i tilfælde af fejl
  }

  return data;  // Returner de hentede data
}
