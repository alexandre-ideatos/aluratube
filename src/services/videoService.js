import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://euuphkygznuygwnsrmqz.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dXBoa3lnem51eWd3bnNybXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3MDkwNTUsImV4cCI6MTk4NDI4NTA1NX0.MKCxNhZhVZDzObi8dX2cm5pbdiuEuWycKQgCCrLBUMU";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*");
        }
    }
}