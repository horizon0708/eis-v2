defmodule EisV2Web.PageController do
  use EisV2Web, :controller

  def index(conn, _params) do
    conn
    |> put_resp_header("content-type", "text/html; charset=utf-8")
    |> Plug.Conn.send_file(200, "./priv/static/game/game.html")
  end
end
