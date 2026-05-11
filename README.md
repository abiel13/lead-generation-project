# 🚀  LeadFlow (Automated Lead Generation System n8n + Supabase)

An end-to-end automated lead generation and outreach system built with **n8n** and **Supabase**. This project demonstrates how leads can be collected, processed, enriched with AI, and managed through a full campaign pipeline with minimal manual effort.

---

## 📌 Overview

This system automates the full lifecycle of lead handling:

* Lead capture from a website via webhook
* Data parsing and transformation using n8n code nodes
* AI-generated personalized outreach emails
* Campaign tracking and storage in Supabase
* Authentication system for secure access

The goal is to simulate a real-world outbound sales automation system (MVP/POC) that can scale into a production SaaS product.

---

## ⚙️ Tech Stack

* **n8n** – Workflow automation engine
* **Supabase** – Authentication + database storage
* **Webhooks** – Lead ingestion from frontend
* **JavaScript (Code Nodes)** – Data parsing and transformation
* **AI Agent (LLM)** – Email generation and personalization

---

## 🔄 System Architecture / Workflow

### 1. Authentication (Supabase)

* Users authenticate via Supabase Auth
* Ensures only authorized users can access campaign features

---

### 2. Lead Capture (Webhook)

* Website sends lead data through a webhook
* Leads are mock-generated for MVP/POC testing purposes

---

### 3. Data Processing (n8n Code Node)

* Incoming webhook data is parsed and cleaned
* Data is normalized into a structured format
* Prepares payload for AI processing

---

### 4. AI Email Generation

* Structured lead data is sent to an AI agent
* AI generates personalized outreach emails per lead
* Emails are returned in a structured format for processing

---

### 5. Email Parsing & Final Formatting

* AI response is parsed again in n8n
* Ensures clean, structured email content
* Prepares data for storage and campaign execution

---

### 6. Supabase Storage

* Final campaigns and generated emails are stored in Supabase
* Enables tracking, retrieval, and historical analysis

---

### 7. Campaign Dashboard

* Displays all sent campaigns
* Shows lead details and generated email content
* Acts as a lightweight CRM-like interface

---

## 🎯 Features

* Fully automated lead-to-email pipeline
* AI-powered personalized outreach
* Secure authentication via Supabase
* Centralized campaign tracking system
* Modular n8n workflow design
* MVP-ready SaaS architecture pattern

---

## 🎥 Demo Video

👉 **Loom Walkthrough:**
https://www.loom.com/share/0e4118504d7e42d6ae5b1ea7044ff982

---

## 🧠 Key Learnings

* Building full automation pipelines with n8n
* Structuring webhook-based systems
* Working with Supabase for auth + database
* Integrating AI agents into real workflows
* Designing scalable MVP SaaS architectures


---

## 📌 Notes
This project was built as an MVP proof-of-concept to demonstrate automated outbound lead generation and AI-driven email personalization using modern no-code/low-code tooling combined with backend logic.

This project was built as an MVP proof-of-concept to demonstrate automated outbound lead generation and AI-driven email personalization using modern no-code/low-code tooling combined with backend logic.
