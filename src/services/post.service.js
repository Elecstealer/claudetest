import { supabase } from '../lib/supabase'

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*, profiles(email)')
    .order('is_notice', { ascending: false })
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getPost(id) {
  const { data, error } = await supabase
    .from('posts')
    .select('*, profiles(email)')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function createPost({ title, content, author_id }) {
  const { data, error } = await supabase
    .from('posts')
    .insert({ title, content, author_id })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}

export async function incrementViews(id) {
  await supabase.rpc('increment_post_views', { post_id: id })
}
