
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [menu, setMenu] = useState("");
  const [comment, setComment] = useState("");
  const [review, setReview] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [step, setStep] = useState(1);

  const handleGenerate = () => {
    const generated = `${name}です。先日${menu}をいただきましたが、味・見た目ともに素晴らしく、特に${comment}が印象に残りました。ぜひまた利用したいです！`;
    setReview(generated);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setReview("");
    setConfirmed(false);
  };

  const handleSubmit = () => {
    const reviewURL = "https://tabelog.com/your-review-url"; // 実際のURLに差し替えてください
    window.open(reviewURL, "_blank");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      {step === 1 && (
        <>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>簡単レビュー作成</h2>
          <input placeholder="お名前" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", marginBottom: "0.5rem" }} />
          <input placeholder="食べたメニュー" value={menu} onChange={(e) => setMenu(e.target.value)} style={{ width: "100%", marginBottom: "0.5rem" }} />
          <textarea placeholder="印象に残った点" value={comment} onChange={(e) => setComment(e.target.value)} style={{ width: "100%", marginBottom: "0.5rem" }} />
          <button onClick={handleGenerate} style={{ width: "100%", marginBottom: "0.5rem" }}>口コミを作成</button>
        </>
      )}
      {step === 2 && (
        <>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>生成された口コミ</h2>
          <textarea value={review} readOnly style={{ width: "100%", marginBottom: "0.5rem" }} />
          <div style={{ marginBottom: "0.5rem" }}>
            <input type="checkbox" id="confirm" onChange={(e) => setConfirmed(e.target.checked)} />
            <label htmlFor="confirm"> この内容で投稿しても問題ないと確認しました</label>
          </div>
          <button onClick={handleSubmit} disabled={!confirmed} style={{ width: "100%", marginBottom: "0.5rem" }}>食べログに投稿</button>
          <button onClick={handleBack} style={{ width: "100%" }}>戻る</button>
        </>
      )}
    </div>
  );
}
