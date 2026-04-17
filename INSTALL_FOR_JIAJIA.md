# 安裝與使用指南 — JiaJia Setup Guide

> **給 JiaJia：** 這是這份 repo 的「開箱指南」。你朋友把整個資料夾壓縮後傳給你——你只要跟著下面的步驟操作，10 分鐘內可以開始用 Claude Code 練習面試。
>
> **For JiaJia:** This is the unboxing guide for the prep repo. Your friend sent you a zip file; follow the steps below and you'll be drilling with Claude Code in about 10 minutes. Commands you need to type are in code blocks — copy them exactly.

---

## 1. 解壓縮收到的 zip 檔 / Unzip the archive

你朋友會用 Dropbox / Google Drive / WeTransfer 傳給你一個 `.zip` 檔 (大概 `private-banking-tutor.zip` 這個名字)。

**macOS：** 在 Finder 裡雙擊 zip → 會自動解壓成一個資料夾 `private-banking-tutor/`。  
**Windows：** 右鍵 zip → 「解壓縮全部」→ 選一個你記得住的位置（例如 `桌面` 或 `文件`）。

**建議位置：** 把解壓後的資料夾放在**你容易記住的路徑**，例如：

- macOS: `~/Documents/private-banking-tutor/`（家目錄下的 Documents）
- Windows: `C:\Users\你的使用者名稱\Documents\private-banking-tutor\`

記下這個路徑——下一步要用。

---

## 2. 確認 Claude Code 已安裝 / Verify Claude Code is installed

你朋友提到你已經有在用 Claude Code——很好，就跳到步驟 3。如果你還沒裝或要重新確認：

打開 Terminal（macOS：Spotlight 搜「Terminal」；Windows：用 PowerShell 或 Windows Terminal），輸入：

```bash
claude --version
```

- 有看到版本號（例如 `claude 1.x.x`）→ 已安裝，跳到步驟 3。
- 沒看到指令 / "command not found" → 參考 [Anthropic 官方安裝文件](https://docs.claude.com/en/docs/claude-code/installation) 安裝。非工程背景可以請朋友幫你跑一次安裝。

---

## 3. 在 repo 資料夾開啟 Claude Code

Terminal 裡輸入以下兩行（把第一行的路徑換成你步驟 1 記下的實際路徑）：

```bash
cd ~/Documents/private-banking-tutor
claude
```

(Windows PowerShell 版本：`cd C:\Users\你的使用者名稱\Documents\private-banking-tutor` 然後 `claude`)

Claude Code 會啟動一個對話視窗，自動讀取這個資料夾裡的 `CLAUDE.md`（這份檔案告訴 Claude 你是 JiaJia、目標是 CW 面試、該用什麼 PM-Assistant 框架）。

---

## 4. 第一次 session — 複製這段話丟給 Claude

```
Hi Claude, 我是 JiaJia。今天是 Day 1 的準備。
請你先讀 START_HERE.md 和 CLAUDE.md，然後再幫我：
1. 根據 START_HERE.md 確認 Day 1 的 focus
2. 針對今天的主題考我，不要直接講解
3. 當我答錯或答不出來，請照 CLAUDE.md 規定的格式
   寫進 assessments/confusion_ledger.md
4. Session 結束時，印出「Daily Handoff block」給我 copy
```

Claude 會讀檔、問你第一題，你就開始練了。

---

## 5. 每天結束要做的事 — 把 daily handoff 傳給你朋友

每次 session 結束前，跟 Claude 說：

> "給我今天的 daily handoff block"

Claude 會印出一段 150 字左右、已經排好格式的摘要，大概長這樣：

```
📋 CW Prep — Day 1, 2026-04-18

Covered today:
- FCN 機制 + worst-of basket 基礎
- KI 和 autocall 的 observation date 差別

New confusion entries:
- FCN KI 踩到之後的 three paths 順序記反
...
```

**複製整段**，貼到 WeChat / LINE / WhatsApp 傳給你朋友。他會幫你把網頁版更新（如果有 repo 沒涵蓋到的東西），明天 session 開始前你就能看到。

---

## 6. 網頁版在哪裡看 / Where to read content

你朋友會單獨傳給你一個連結（大概是 `https://chengde-lin.github.io/private-banking-tutor/`）。

**建議的日常流程：**
1. **早上（或 session 前 20 分鐘）**：上網頁讀當天 START_HERE.md 指定的閱讀材料。
2. **接著**：回到本機，打開 Claude Code 做 drill（針對剛剛讀過的內容練習）。
3. **結束**：複製 daily handoff，傳給朋友。

**為什麼要分開讀網頁 vs 本機 Claude Code？**
- 網頁版**永遠是最新的**——你朋友任何時候更新內容，網頁立刻看得到。
- 本機資料夾是**壓縮當下的快照**——用來讓 Claude Code 有脈絡可以引用，不用連網。

所以：閱讀材料看網頁，練習 drill 看本機。

---

## 常見問題 / FAQ

**Q1: Claude 不知道今天是 Day 幾？**  
答：直接告訴它：「今天是 Day 3」或「今天我想練 FCN lifecycle」。Claude Code 不會自動記住跨 session 的狀態，但會讀 confusion_ledger.md 作為連續性依據。

**Q2: 我覺得 Claude 答的不對？**  
答：直接說「這個答案我覺得怪，可以引用 repo 裡哪一份檔案證明嗎」。Claude 如果引用不出來，那它可能在編——請標記，晚上傳 handoff 時跟朋友說。

**Q3: 可以跟 Claude 用中文對話嗎？**  
答：可以。CLAUDE.md 裡寫明內容以英文為主（因為面試是英文），但你口語對話時中英文混用 Claude 都 OK。重要的面試答案還是要用英文練。

**Q4: Claude 說「請做一個完整 mock interview」？**  
答：不要同意。CLAUDE.md 明確關掉 mock interview 模式（你朋友覺得那種練習 ROI 很低）。單題練習、反覆 drill FCN KI 反應腳本、Why Singapore 答案，這些才是有效的。

**Q5: 我的本機 repo 資料夾更新跟不上網頁？**  
答：正常——每幾天跟朋友要一份新的 zip，覆蓋掉舊的 `private-banking-tutor/` 資料夾即可。或是直接問 Claude：「這個問題網頁上有沒有新的內容？」Claude 會建議你去網頁看。

---

## 一頁流程圖 / One-page workflow

```
每天流程 (Daily rhythm)：

  ┌─ 網頁閱讀 20-30 min ──┐
  │  (照 START_HERE.md   │
  │   的當日主題)         │
  └──────────────────────┘
            │
            ▼
  ┌─ 本機 Claude Code ───┐
  │  30-60 min drill     │
  │  · 朋友 → Claude      │
  │  · Claude 問你答      │
  │  · Claude 自動 log    │
  │    confusion_ledger  │
  └──────────────────────┘
            │
            ▼
  ┌─ 複製 Daily Handoff ─┐
  │  傳給朋友             │
  │  (WeChat/LINE)       │
  └──────────────────────┘
            │
            ▼
  ┌─ 朋友收到 Handoff ────┐
  │  更新網頁（如需要）    │
  │  準備下日 focus        │
  └──────────────────────┘
            │
            ▼
          明天
```

---

## 遇到卡住的情境

- **Claude Code 開不起來 / 看不到 CLAUDE.md** → 確認你 `cd` 到了正確的資料夾，然後在那個資料夾裡 `ls` 應該看到 `CLAUDE.md`、`START_HERE.md`、`products/` 這些名字。看不到表示你在錯的資料夾。
- **Claude 一直在講太長的解釋，不考你** → 直接說「請少講多問，我要被 quiz，不是聽課」。CLAUDE.md 規定它應該這樣，提醒一下它就會回到正軌。
- **Confusion ledger 看起來沒在更新** → Session 結束時直接問 Claude：「今天我答錯的有寫進 confusion_ledger.md 了嗎？開給我看一下。」如果沒有，請它補上。
- **不知道今天該讀哪一頁** → 問 Claude：「我今天 Day N，依照 START_HERE.md 我該讀哪些檔案、優先順序？」它會看表幫你排。

---

## 安全提醒

- `confusion_ledger.md` 和 `CHEAT_SHEET.md` 裡會有你的**學習軌跡和弱點** — 不要把這兩個檔案傳到公開平台（不要 post 到 LinkedIn / X）。傳給朋友（私訊）OK。
- 面試前一天：只複習 `CHEAT_SHEET.md`，不要再從頭讀產品頁——背內容只會讓你緊張。
- 面試當天：出門前 30 分鐘停止所有閱讀。專心去吃飯、走路、聽音樂。緊張到忘記答案的人，往往是面試前半小時還在看筆記的那個。

祝面試順利。

---

## Related

- [`START_HERE.md`](START_HERE.md) — 7 天逐日準備計畫。
- [`CLAUDE.md`](CLAUDE.md) — Claude Code 的行為設定（你不用改，但可以翻一下了解它怎麼陪你練）。
- [`CHEAT_SHEET.md`](CHEAT_SHEET.md) — 面試前 24 小時翻的那張紙（一開始是空骨架，Claude 會一天天幫你填）。
- [`assessments/confusion_ledger.md`](assessments/confusion_ledger.md) — 你答錯的東西都記在這裡（Claude 自動管）。
