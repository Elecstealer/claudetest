import { supabase } from '../lib/supabase'

export async function getMyInquiries(userId) {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .eq('author_id', userId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getAllInquiries() {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*, profiles(email)')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function createInquiry({ title, content, category, author_id }) {
  const { data, error } = await supabase
    .from('inquiries')
    .insert({ title, content, category, author_id, status: 'pending' })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function answerInquiry(id, answer) {
  const { data, error } = await supabase
    .from('inquiries')
    .update({ answer, status: 'answered', updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}
