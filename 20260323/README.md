# 🌿Humming: AI-Powered Travel Companion Platform
**Humming is a safety-first travel companion matching platform and community built to solve the trust and compatibility gap.** By integrating an AI-driven matching engine, a strict verification and review system, escrow-backed accountability, and an engaging community hub, it transforms unpredictable meetups into secure, highly compatible travel experiences.

**🔗 [Demo](https://evelyn-hj-kim.github.io/humming)**<br>
**🔗 [Product Requirements Document (PRD)](https://docs.google.com/document/d/12Xrw1heS5oo3aBd7LvoRCkG5pbPzcJWJU6VKPPmLaYs/edit?usp=sharing)**<br>
**🔗 [User Validation Survey](https://forms.gle/VgoYGeaUXeiunGMC9)**

---
## 🛠 Strategic Architecture
```mermaid
flowchart TB
    classDef implemented fill:#ecfdf5,stroke:#10b981,stroke-width:2px,color:#065f46
    classDef logical fill:#f8fafc,stroke:#64748b,stroke-width:1px,color:#1e293b
    classDef roadmap fill:#eff6ff,stroke:#3b82f6,stroke-width:1px,color:#1e3a8a
    classDef flywheel fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#92400e

    subgraph Input [User Input Layer]
        VIBE["Travel Vibe Test\n(Rule-based scoring)"]:::implemented
        ID["Identity Verification"]:::implemented
    end

    subgraph Matching [Matching System]
        FILTER["Hard Filters\n(Dates, Destination, etc.)"]:::logical
        AI["AI Ranking\n(Profile & Text signals)"]:::roadmap
    end

    subgraph Community [Community Hub]
        COMM["Tips & Q&A\nEngagement Layer"]:::implemented
    end

    subgraph Output [Marketplace Outcome]
        MATCH["Matched Users & Trips"]:::implemented
        ESCROW["Escrow + Trip Execution"]:::roadmap
        REVIEW["Reviews"]:::logical
    end

    VIBE --> FILTER
    FILTER --> AI
    AI --> MATCH
    MATCH --> ESCROW
    ESCROW --> REVIEW

    VIBE --> COMM
    ID --> COMM

    COMM -.-> FILTER
    COMM -.-> AI

    REVIEW --> LOOP["Trust Loop Improves Matching"]:::flywheel
    LOOP -.-> FILTER
    LOOP -.-> AI
    LOOP -.-> COMM
