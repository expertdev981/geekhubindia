export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          badge_color: string
          badge_icon: string
          category: string
          created_at: string
          description: string
          difficulty: string
          id: string
          points: number
          requirements: Json
          title: string
          updated_at: string
        }
        Insert: {
          badge_color: string
          badge_icon: string
          category: string
          created_at?: string
          description: string
          difficulty: string
          id?: string
          points: number
          requirements?: Json
          title: string
          updated_at?: string
        }
        Update: {
          badge_color?: string
          badge_icon?: string
          category?: string
          created_at?: string
          description?: string
          difficulty?: string
          id?: string
          points?: number
          requirements?: Json
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          permissions: Json | null
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          permissions?: Json | null
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          permissions?: Json | null
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
        }
        Relationships: []
      }
      article_bookmarks: {
        Row: {
          article_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_bookmarks_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_bookmarks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      article_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          position: number | null
          slug: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          position?: number | null
          slug: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          position?: number | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      article_comments: {
        Row: {
          article_id: string
          body: string
          body_html: string
          created_at: string
          id: string
          parent_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          article_id: string
          body: string
          body_html: string
          created_at?: string
          id?: string
          parent_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          article_id?: string
          body?: string
          body_html?: string
          created_at?: string
          id?: string
          parent_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "article_comments_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "article_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      article_history: {
        Row: {
          article_id: string
          content: string
          content_html: string
          created_at: string
          edited_by: string | null
          id: string
          title: string
        }
        Insert: {
          article_id: string
          content: string
          content_html: string
          created_at?: string
          edited_by?: string | null
          id?: string
          title: string
        }
        Update: {
          article_id?: string
          content?: string
          content_html?: string
          created_at?: string
          edited_by?: string | null
          id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_history_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_history_edited_by_fkey"
            columns: ["edited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      article_likes: {
        Row: {
          article_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_likes_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "article_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      article_tags: {
        Row: {
          article_id: string
          tag_id: string
        }
        Insert: {
          article_id: string
          tag_id: string
        }
        Update: {
          article_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "article_tags_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author_id: string
          category_id: string | null
          content: string
          content_html: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          is_featured: boolean | null
          published_at: string | null
          reading_time: number | null
          reviewer_id: string | null
          slug: string
          status: Database["public"]["Enums"]["article_status"]
          title: string
          updated_at: string
          views_count: number | null
        }
        Insert: {
          author_id: string
          category_id?: string | null
          content: string
          content_html: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          published_at?: string | null
          reading_time?: number | null
          reviewer_id?: string | null
          slug: string
          status?: Database["public"]["Enums"]["article_status"]
          title: string
          updated_at?: string
          views_count?: number | null
        }
        Update: {
          author_id?: string
          category_id?: string | null
          content?: string
          content_html?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          is_featured?: boolean | null
          published_at?: string | null
          reading_time?: number | null
          reviewer_id?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["article_status"]
          title?: string
          updated_at?: string
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "article_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      challenge_participants: {
        Row: {
          challenge_id: string
          completed_at: string | null
          id: string
          is_completed: boolean
          joined_at: string
          progress: number
          user_id: string
        }
        Insert: {
          challenge_id: string
          completed_at?: string | null
          id?: string
          is_completed?: boolean
          joined_at?: string
          progress?: number
          user_id: string
        }
        Update: {
          challenge_id?: string
          completed_at?: string | null
          id?: string
          is_completed?: boolean
          joined_at?: string
          progress?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "challenge_participants_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "community_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "challenge_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      community_challenges: {
        Row: {
          category: string
          created_at: string
          created_by: string
          description: string
          difficulty: string
          end_date: string
          id: string
          is_active: boolean
          points: number
          start_date: string
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          created_by: string
          description: string
          difficulty: string
          end_date: string
          id?: string
          is_active?: boolean
          points: number
          start_date: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string
          description?: string
          difficulty?: string
          end_date?: string
          id?: string
          is_active?: boolean
          points?: number
          start_date?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_challenges_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      content_metrics: {
        Row: {
          avg_time_spent: number | null
          comments: number
          content_id: string
          content_type: string
          created_at: string
          id: string
          likes: number
          shares: number
          updated_at: string
          views: number
        }
        Insert: {
          avg_time_spent?: number | null
          comments?: number
          content_id: string
          content_type: string
          created_at?: string
          id?: string
          likes?: number
          shares?: number
          updated_at?: string
          views?: number
        }
        Update: {
          avg_time_spent?: number | null
          comments?: number
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          likes?: number
          shares?: number
          updated_at?: string
          views?: number
        }
        Relationships: []
      }
      event_registrations: {
        Row: {
          amount_paid: number
          created_at: string
          event_id: string
          id: string
          is_attended: boolean
          payment_id: string | null
          payment_provider: string | null
          user_id: string
        }
        Insert: {
          amount_paid: number
          created_at?: string
          event_id: string
          id?: string
          is_attended?: boolean
          payment_id?: string | null
          payment_provider?: string | null
          user_id: string
        }
        Update: {
          amount_paid?: number
          created_at?: string
          event_id?: string
          id?: string
          is_attended?: boolean
          payment_id?: string | null
          payment_provider?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "paid_events"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          parent_id: string | null
          position: number | null
          slug: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          parent_id?: string | null
          position?: number | null
          slug: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          parent_id?: string | null
          position?: number | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "forum_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_flags: {
        Row: {
          created_at: string
          id: string
          post_id: string | null
          reason: string
          status: string
          thread_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          post_id?: string | null
          reason: string
          status?: string
          thread_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string | null
          reason?: string
          status?: string
          thread_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_flags_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_flags_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_post_history: {
        Row: {
          body: string
          body_html: string
          created_at: string
          edited_by: string | null
          id: string
          post_id: string
        }
        Insert: {
          body: string
          body_html: string
          created_at?: string
          edited_by?: string | null
          id?: string
          post_id: string
        }
        Update: {
          body?: string
          body_html?: string
          created_at?: string
          edited_by?: string | null
          id?: string
          post_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_post_history_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_posts: {
        Row: {
          attachments: Json | null
          body: string
          body_html: string
          created_at: string
          id: string
          is_accepted_answer: boolean | null
          parent_id: string | null
          thread_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          attachments?: Json | null
          body: string
          body_html: string
          created_at?: string
          id?: string
          is_accepted_answer?: boolean | null
          parent_id?: string | null
          thread_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          attachments?: Json | null
          body?: string
          body_html?: string
          created_at?: string
          id?: string
          is_accepted_answer?: boolean | null
          parent_id?: string | null
          thread_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_posts_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_posts_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_tags: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      forum_thread_follows: {
        Row: {
          created_at: string
          id: string
          thread_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          thread_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          thread_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_thread_follows_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_thread_history: {
        Row: {
          body: string
          body_html: string
          created_at: string
          edited_by: string | null
          id: string
          thread_id: string
          title: string
        }
        Insert: {
          body: string
          body_html: string
          created_at?: string
          edited_by?: string | null
          id?: string
          thread_id: string
          title: string
        }
        Update: {
          body?: string
          body_html?: string
          created_at?: string
          edited_by?: string | null
          id?: string
          thread_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_thread_history_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_thread_tags: {
        Row: {
          tag_id: string
          thread_id: string
        }
        Insert: {
          tag_id: string
          thread_id: string
        }
        Update: {
          tag_id?: string
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "forum_thread_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "forum_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_thread_tags_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_threads: {
        Row: {
          attachments: Json | null
          body: string
          body_html: string
          category_id: string | null
          created_at: string
          id: string
          is_draft: boolean | null
          is_locked: boolean | null
          is_question: boolean | null
          is_solved: boolean | null
          is_sticky: boolean | null
          last_activity_at: string
          slug: string
          solution_post_id: string | null
          title: string
          updated_at: string
          user_id: string | null
          view_count: number | null
        }
        Insert: {
          attachments?: Json | null
          body: string
          body_html: string
          category_id?: string | null
          created_at?: string
          id?: string
          is_draft?: boolean | null
          is_locked?: boolean | null
          is_question?: boolean | null
          is_solved?: boolean | null
          is_sticky?: boolean | null
          last_activity_at?: string
          slug: string
          solution_post_id?: string | null
          title: string
          updated_at?: string
          user_id?: string | null
          view_count?: number | null
        }
        Update: {
          attachments?: Json | null
          body?: string
          body_html?: string
          category_id?: string | null
          created_at?: string
          id?: string
          is_draft?: boolean | null
          is_locked?: boolean | null
          is_question?: boolean | null
          is_solved?: boolean | null
          is_sticky?: boolean | null
          last_activity_at?: string
          slug?: string
          solution_post_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string | null
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_solution_post"
            columns: ["solution_post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_threads_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "forum_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_votes: {
        Row: {
          created_at: string
          id: string
          post_id: string | null
          thread_id: string | null
          user_id: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: string
          post_id?: string | null
          thread_id?: string | null
          user_id: string
          value: number
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string | null
          thread_id?: string | null
          user_id?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "forum_votes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forum_votes_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "forum_threads"
            referencedColumns: ["id"]
          },
        ]
      }
      geek_awards: {
        Row: {
          awarded_to: string | null
          category: string
          content_id: string | null
          content_type: string | null
          created_at: string
          description: string
          id: string
          quarter: number | null
          title: string
          year: number
        }
        Insert: {
          awarded_to?: string | null
          category: string
          content_id?: string | null
          content_type?: string | null
          created_at?: string
          description: string
          id?: string
          quarter?: number | null
          title: string
          year: number
        }
        Update: {
          awarded_to?: string | null
          category?: string
          content_id?: string | null
          content_type?: string | null
          created_at?: string
          description?: string
          id?: string
          quarter?: number | null
          title?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "geek_awards_awarded_to_fkey"
            columns: ["awarded_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      invites: {
        Row: {
          code: string
          created_at: string
          created_by: string | null
          current_uses: number | null
          email: string
          expires_at: string
          id: string
          max_uses: number | null
          used_at: string | null
          used_by: string | null
        }
        Insert: {
          code: string
          created_at?: string
          created_by?: string | null
          current_uses?: number | null
          email: string
          expires_at: string
          id?: string
          max_uses?: number | null
          used_at?: string | null
          used_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          created_by?: string | null
          current_uses?: number | null
          email?: string
          expires_at?: string
          id?: string
          max_uses?: number | null
          used_at?: string | null
          used_by?: string | null
        }
        Relationships: []
      }
      leaderboard_entries: {
        Row: {
          category: string
          end_date: string
          id: string
          period: string
          points: number
          rank: number
          start_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          end_date: string
          id?: string
          period: string
          points?: number
          rank: number
          start_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          end_date?: string
          id?: string
          period?: string
          points?: number
          rank?: number
          start_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      membership_tiers: {
        Row: {
          annual_price: number
          badge_color: string | null
          badge_icon: string | null
          created_at: string
          currency: string
          description: string
          features: Json
          id: string
          monthly_price: number
          name: string
          updated_at: string
        }
        Insert: {
          annual_price: number
          badge_color?: string | null
          badge_icon?: string | null
          created_at?: string
          currency?: string
          description: string
          features?: Json
          id?: string
          monthly_price: number
          name: string
          updated_at?: string
        }
        Update: {
          annual_price?: number
          badge_color?: string | null
          badge_icon?: string | null
          created_at?: string
          currency?: string
          description?: string
          features?: Json
          id?: string
          monthly_price?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      mentorship_relationships: {
        Row: {
          created_at: string
          focus_area: string
          id: string
          mentee_id: string
          mentor_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          focus_area: string
          id?: string
          mentee_id: string
          mentor_id: string
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          focus_area?: string
          id?: string
          mentee_id?: string
          mentor_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentorship_relationships_mentee_id_fkey"
            columns: ["mentee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentorship_relationships_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          is_verified: boolean | null
          subscribed_at: string
          updated_at: string
          user_id: string | null
          verification_token: string | null
        }
        Insert: {
          email: string
          id?: string
          is_verified?: boolean | null
          subscribed_at?: string
          updated_at?: string
          user_id?: string | null
          verification_token?: string | null
        }
        Update: {
          email?: string
          id?: string
          is_verified?: boolean | null
          subscribed_at?: string
          updated_at?: string
          user_id?: string | null
          verification_token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          created_at: string
          direct_message_notifications: boolean | null
          email_notifications: boolean | null
          event_reminders: boolean | null
          forum_activity: boolean | null
          id: string
          mention_notifications: boolean | null
          newsletter: boolean | null
          push_notifications: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          direct_message_notifications?: boolean | null
          email_notifications?: boolean | null
          event_reminders?: boolean | null
          forum_activity?: boolean | null
          id?: string
          mention_notifications?: boolean | null
          newsletter?: boolean | null
          push_notifications?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          direct_message_notifications?: boolean | null
          email_notifications?: boolean | null
          event_reminders?: boolean | null
          forum_activity?: boolean | null
          id?: string
          mention_notifications?: boolean | null
          newsletter?: boolean | null
          push_notifications?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          link: string
          message: string
          read: boolean
          sender_id: string | null
          source_id: string | null
          source_type: string | null
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          link: string
          message: string
          read?: boolean
          sender_id?: string | null
          source_id?: string | null
          source_type?: string | null
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          link?: string
          message?: string
          read?: boolean
          sender_id?: string | null
          source_id?: string | null
          source_type?: string | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      paid_events: {
        Row: {
          capacity: number | null
          created_at: string
          currency: string
          description: string
          ends_at: string
          event_type: string
          host_id: string | null
          id: string
          is_published: boolean
          location: string | null
          meeting_url: string | null
          price: number
          starts_at: string
          timezone: string
          title: string
          updated_at: string
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          currency?: string
          description: string
          ends_at: string
          event_type: string
          host_id?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          meeting_url?: string | null
          price: number
          starts_at: string
          timezone?: string
          title: string
          updated_at?: string
        }
        Update: {
          capacity?: number | null
          created_at?: string
          currency?: string
          description?: string
          ends_at?: string
          event_type?: string
          host_id?: string | null
          id?: string
          is_published?: boolean
          location?: string | null
          meeting_url?: string | null
          price?: number
          starts_at?: string
          timezone?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      payment_transactions: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          payment_details: Json | null
          payment_id: string
          payment_provider: string
          payment_status: string
          related_entity_id: string | null
          related_entity_type: string | null
          transaction_type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          payment_details?: Json | null
          payment_id: string
          payment_provider: string
          payment_status: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          transaction_type: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          payment_details?: Json | null
          payment_id?: string
          payment_provider?: string
          payment_status?: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          transaction_type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company: string | null
          created_at: string
          experience_level:
            | Database["public"]["Enums"]["experience_level"]
            | null
          featured_badge_id: string | null
          full_name: string | null
          geek_points: number
          github_url: string | null
          id: string
          is_mentor: boolean | null
          is_profile_public: boolean | null
          job_title: string | null
          level: number
          linkedin_url: string | null
          location: string | null
          mentor_focus_areas: string[] | null
          next_level_points: number
          twitter_url: string | null
          updated_at: string
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          experience_level?:
            | Database["public"]["Enums"]["experience_level"]
            | null
          featured_badge_id?: string | null
          full_name?: string | null
          geek_points?: number
          github_url?: string | null
          id: string
          is_mentor?: boolean | null
          is_profile_public?: boolean | null
          job_title?: string | null
          level?: number
          linkedin_url?: string | null
          location?: string | null
          mentor_focus_areas?: string[] | null
          next_level_points?: number
          twitter_url?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company?: string | null
          created_at?: string
          experience_level?:
            | Database["public"]["Enums"]["experience_level"]
            | null
          featured_badge_id?: string | null
          full_name?: string | null
          geek_points?: number
          github_url?: string | null
          id?: string
          is_mentor?: boolean | null
          is_profile_public?: boolean | null
          job_title?: string | null
          level?: number
          linkedin_url?: string | null
          location?: string | null
          mentor_focus_areas?: string[] | null
          next_level_points?: number
          twitter_url?: string | null
          updated_at?: string
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_featured_badge_id_fkey"
            columns: ["featured_badge_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      site_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_type: string
          metric_value: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_type: string
          metric_value: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_type?: string
          metric_value?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sponsored_placements: {
        Row: {
          clicks_count: number
          company_logo: string | null
          company_name: string
          content: string
          created_at: string
          ends_at: string
          id: string
          image_url: string | null
          is_active: boolean
          payment_id: string | null
          placement_type: string
          starts_at: string
          target_url: string
          updated_at: string
          views_count: number
        }
        Insert: {
          clicks_count?: number
          company_logo?: string | null
          company_name: string
          content: string
          created_at?: string
          ends_at: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          payment_id?: string | null
          placement_type: string
          starts_at: string
          target_url: string
          updated_at?: string
          views_count?: number
        }
        Update: {
          clicks_count?: number
          company_logo?: string | null
          company_name?: string
          content?: string
          created_at?: string
          ends_at?: string
          id?: string
          image_url?: string | null
          is_active?: boolean
          payment_id?: string | null
          placement_type?: string
          starts_at?: string
          target_url?: string
          updated_at?: string
          views_count?: number
        }
        Relationships: []
      }
      tech_stacks: {
        Row: {
          description: string | null
          icon_url: string | null
          id: string
          name: string
        }
        Insert: {
          description?: string | null
          icon_url?: string | null
          id?: string
          name: string
        }
        Update: {
          description?: string | null
          icon_url?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string
          id: string
          unlocked_at: string
          user_id: string
        }
        Insert: {
          achievement_id: string
          id?: string
          unlocked_at?: string
          user_id: string
        }
        Update: {
          achievement_id?: string
          id?: string
          unlocked_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_flags: {
        Row: {
          content_id: string
          content_type: string
          created_at: string
          flagged_by: string | null
          id: string
          moderator_note: string | null
          reason: string
          resolved_by: string | null
          status: string
          updated_at: string
        }
        Insert: {
          content_id: string
          content_type: string
          created_at?: string
          flagged_by?: string | null
          id?: string
          moderator_note?: string | null
          reason: string
          resolved_by?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          content_id?: string
          content_type?: string
          created_at?: string
          flagged_by?: string | null
          id?: string
          moderator_note?: string | null
          reason?: string
          resolved_by?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_memberships: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          is_active: boolean
          is_auto_renew: boolean
          payment_id: string | null
          payment_provider: string | null
          starts_at: string
          tier_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          is_active?: boolean
          is_auto_renew?: boolean
          payment_id?: string | null
          payment_provider?: string | null
          starts_at?: string
          tier_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          is_active?: boolean
          is_auto_renew?: boolean
          payment_id?: string | null
          payment_provider?: string | null
          starts_at?: string
          tier_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_memberships_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: false
            referencedRelation: "membership_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      user_tech_stacks: {
        Row: {
          created_at: string
          id: string
          is_primary: boolean | null
          proficiency: number | null
          tech_stack_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_primary?: boolean | null
          proficiency?: number | null
          tech_stack_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_primary?: boolean | null
          proficiency?: number | null
          tech_stack_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_tech_stacks_tech_stack_id_fkey"
            columns: ["tech_stack_id"]
            isOneToOne: false
            referencedRelation: "tech_stacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_tech_stacks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist: {
        Row: {
          access_code: string
          approved_at: string | null
          created_at: string
          email: string
          experience_level: string
          full_name: string
          id: string
          invite_code: string | null
          position: number | null
          reason: string
          referral_source: string | null
          status: string
          tech_interests: string[] | null
          updated_at: string
        }
        Insert: {
          access_code: string
          approved_at?: string | null
          created_at?: string
          email: string
          experience_level: string
          full_name: string
          id?: string
          invite_code?: string | null
          position?: number | null
          reason: string
          referral_source?: string | null
          status?: string
          tech_interests?: string[] | null
          updated_at?: string
        }
        Update: {
          access_code?: string
          approved_at?: string | null
          created_at?: string
          email?: string
          experience_level?: string
          full_name?: string
          id?: string
          invite_code?: string | null
          position?: number | null
          reason?: string
          referral_source?: string | null
          status?: string
          tech_interests?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "waitlist_invite_code_fkey"
            columns: ["invite_code"]
            isOneToOne: true
            referencedRelation: "invites"
            referencedColumns: ["code"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_geek_points: {
        Args: { points: number; user_id: string }
        Returns: undefined
      }
      assign_article_reviewer: {
        Args: { article_id: string; reviewer_id: string }
        Returns: boolean
      }
      calculate_next_level_points: {
        Args: { current_level: number }
        Returns: number
      }
      generate_access_code: { Args: never; Returns: string }
      get_waitlist_count: { Args: never; Returns: number }
      increment_article_views: {
        Args: { article_id: string }
        Returns: undefined
      }
      increment_site_visitor_count: { Args: never; Returns: number }
      is_admin: {
        Args: { requested_role?: Database["public"]["Enums"]["admin_role"] }
        Returns: boolean
      }
      update_article_status: {
        Args: {
          article_id: string
          new_status: Database["public"]["Enums"]["article_status"]
        }
        Returns: boolean
      }
    }
    Enums: {
      admin_role:
        | "super_admin"
        | "content_moderator"
        | "community_manager"
        | "analytics_manager"
      article_status: "draft" | "review" | "published"
      experience_level: "beginner" | "intermediate" | "advanced" | "expert"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      admin_role: [
        "super_admin",
        "content_moderator",
        "community_manager",
        "analytics_manager",
      ],
      article_status: ["draft", "review", "published"],
      experience_level: ["beginner", "intermediate", "advanced", "expert"],
    },
  },
} as const
