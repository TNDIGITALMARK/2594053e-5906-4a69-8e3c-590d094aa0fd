import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
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
