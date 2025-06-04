import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function ReviewApp() {
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
    <div className="p-4 max-w-md mx-auto">
      <Card className="mb-4">
        <CardContent>
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold mb-2">簡単レビュー作成</h2>
              <Input placeholder="お名前" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
              <Input placeholder="食べたメニュー" value={menu} onChange={(e) => setMenu(e.target.value)} className="mb-2" />
              <Textarea placeholder="印象に残った点" value={comment} onChange={(e) => setComment(e.target.value)} className="mb-2" />
              <Button onClick={handleGenerate} className="w-full mb-2">口コミを作成</Button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-bold mb-2">生成された口コミ</h2>
              <Textarea value={review} readOnly className="mb-2" />
              <div className="flex items-center mb-2">
                <input type="checkbox" id="confirm" onChange={(e) => setConfirmed(e.target.checked)} className="mr-2" />
                <label htmlFor="confirm">この内容で投稿しても問題ないと確認しました</label>
              </div>
              <Button onClick={handleSubmit} disabled={!confirmed} className="w-full mb-2">食べログに投稿</Button>
              <Button variant="outline" onClick={handleBack} className="w-full">戻る</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
