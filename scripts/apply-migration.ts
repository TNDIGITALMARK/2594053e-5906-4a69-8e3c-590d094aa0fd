import fs from 'fs';

const sql = fs.readFileSync('/tmp/create_checkout_schema.sql', 'utf-8');

async function applyMigration() {
  const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'create_checkout_tables',
      sql: sql,
      autoApply: true
    })
  });

  const result = await response.json();

  if (result.success) {
    console.log('✅ Migration successful!');
    console.log('   File:', result.fileName);
    console.log('   Applied:', result.applied);
    console.log('   Steps:', result.steps);
  } else {
    console.error('❌ Migration failed:', result.error);
    if (result.validation && !result.validation.passed) {
      console.error('Validation errors:');
      result.validation.errors.forEach((err: string) => console.error('  -', err));
    }
    console.error('Failed steps:', result.steps);
  }
}

applyMigration();
