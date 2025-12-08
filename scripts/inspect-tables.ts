import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiMjU5NDA1M2UtNTkwNi00YTY5LThlM2MtNTkwZDA5NGFhMGZkIiwianRpIjoiMGRmZGYzZGQtOTE3Yy00ZDQ2LTk2YmUtZGE3MTEwOTAwZjA4IiwiaWF0IjoxNzY1MTYzMDE2LCJleHAiOjE3NjUxNjU3MTZ9.OZjWYugBZDm-w8QlTkplBWvFcoxHNP4hXtH6cEQ-o4g`
      }
    }
  }
);

async function inspectTables() {
  console.log('=== BOOKS TABLE ===\n');
  const { data: books } = await supabase.from('books').select('*').limit(3);
  console.log('Sample books:', JSON.stringify(books, null, 2));

  console.log('\n=== ORDERS TABLE ===\n');
  const { data: orders } = await supabase.from('orders').select('*').limit(1);
  console.log('Sample orders:', JSON.stringify(orders, null, 2));

  console.log('\n=== ORDER_ITEMS TABLE ===\n');
  const { data: orderItems } = await supabase.from('order_items').select('*').limit(1);
  console.log('Sample order_items:', JSON.stringify(orderItems, null, 2));
}

inspectTables();
