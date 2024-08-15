 <ErrorBoundary fallback={
            <div>
              <p>죄송합니다. 데이터를 로드하는 중 문제가 발생했습니다.</p>
              <button onClick={() => window.location.reload()}>다시 시도</button>
              <br />
              <button onClick={() => window.location.href = '/'}>메인 화면으로 이동</button>
            </div>
          }>{posts.map((community, idx) => (
              <CommunityItem
                key={idx}
                community={community}
                onSelect={onSelectedPost}
                onLike={onLikePost}
                onBlock={onBlockPost}
                onReport={onReportPost}
                onEdit={onEditPost}
                onDelete={onDeletePost}
              />
          ))}</ErrorBoundary>
