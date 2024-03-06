"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function MediaCard({ props }) {
  // console.log("props", props);
  // console.log("id", id);
  return (
    <Link href={`/post/${props.tagName}`}>
      <Card
        className="hover:cursor-pointer h-[300px] md:h-[400px]"
        sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 0 }}
      >
        <CardMedia className="hover:opacity-40 h-[200px] md:h-[250px]" image={props.thumbnail} title="green iguana" />
        <CardContent>
          <Typography
            className="hover:text-orange-400 overflow-hidden text-4xl relative right-4"
            gutterBottom
            component="div"
          >
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
