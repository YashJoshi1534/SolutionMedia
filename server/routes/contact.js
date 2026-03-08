import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    console.log("CONTACT ROUTE HIT");
    console.log("BODY:", req.body);

    return res.status(200).json({
      success: true,
      message: "Contact API working"
    });

  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
});

export default router;